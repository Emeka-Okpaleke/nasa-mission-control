// This file would contain the actual API calls to the SpaceX API
// For the demo, we're using mock data in the components

export async function fetchLaunches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches")
      if (!response.ok) {
        throw new Error("Failed to fetch launches")
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching launches:", error)
      throw error
    }
  }
  
  export async function fetchRockets() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/rockets")
      if (!response.ok) {
        throw new Error("Failed to fetch rockets")
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching rockets:", error)
      throw error
    }
  }
  
  export async function fetchLaunchpads() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launchpads")
      if (!response.ok) {
        throw new Error("Failed to fetch launchpads")
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching launchpads:", error)
      throw error
    }
  }
  
  export async function fetchNextLaunch() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches/next")
      if (!response.ok) {
        throw new Error("Failed to fetch next launch")
      }
      return await response.json()
    } catch (error) {
      console.error("Error fetching next launch:", error)
      throw error
    }
  }
  
  