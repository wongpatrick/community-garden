package engine

type GardenEngine struct {
	garden *Garden
	events chan Event
	broadcast chan<- []byte
}

func NewGardenEngine() *GardenEngine {
	return &GardenEngine{
		garden: NewGarden(),
		events: make(chan Event, )
	}
}

func (e *engine) handleEvent(event Event) {
	//find the plot 
	plot, ok := e.garden.Plots[event.PlotID]

	//switch case on event type
	switch event.Type {
	case "water":
		handleWater(plot)
	case "weed":
		handleWeed(plot)
	case "plant":
		handlePlant(plot)
	}
}