package engine

// Potentially could be extracted to it's own package but part of PoC we're leaving it in the engine

import (
	"fmt"
)

type Plot struct {
	ID     string `json:"id"`
	Hydration float64 `json:"hydration"`
	Weeds float64 `json:"weeds"`
	Occupied bool `json:"occupied"`
	Health float64 `json:"health"`
	Version int `json:"version"`
}

type Garden struct {
	Plots map[string]*Plot `json:"plots"`
}

func NewGarden() *Garden {
	plots := make(map[string]*Plot)
	// rows are the letters and columns are the numbers
	rows := []string{"A", "B", "C", "D", "E"}
	for _, row := range rows {
		for col := 1; col <= 5; col++ {
			id := fmt.Sprintf("%s%d", row, col)
			plots[id] = &Plot{
				ID: id,
				Hydration: 50,
				Weeds: 0,
				Health: 50,
			}
		}
	}
	return &Garden{Plots: plots}
}

type Event struct {
	Type string `json:"type"`
	PlotID string `json:"plotId"`
	Version int `json:"version"`
	Reply chan<- []byte // chan<- means the engine can only send to this channel, not receive
}