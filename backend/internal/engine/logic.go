package engine

import "community-garden/backend/internal/engine"

// Potentially could be extracted to it's own package but part of PoC we're leaving it in the engine

//applyDecay
//handleWater
//handleWeed
//handlePlant

//custom clamp function to clamp values between 0 and 100
func clamp(v, min, max float64) float64 {
	if v < min {
		return min
	}
	if v > max {
		return max
	}
	return v
}

func (e *engine ) applyDecay(id) {
	// do event on e.plot
}

func handleWater(plot *Plot) {

}

func handleWeed(plot *Plot) {

}

func handlePlant(plot *Plot) {

}