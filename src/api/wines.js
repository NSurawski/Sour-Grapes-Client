import apiUrl from '../apiConfig'
import axios from 'axios'

// Index All Wines
export const wineIndexAll = user => {
  return axios({
    url: apiUrl + '/wines',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Show Wine
export const showWine = (id, user) => {
  return axios({
    url: apiUrl + '/wines/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Create
export const createWine = (wine, user) => {
  return axios({
    url: apiUrl + '/wines',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { wine: wine }
  })
}

// Delete Wine
export const wineDelete = (id, user) => {
  return axios({
    url: apiUrl + '/wines/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

// Update Wine
export const wineUpdate = (id, wine, user) => {
  return axios({
    url: apiUrl + '/wines/' + id,
    method: 'PATCH',
    data: { wine: wine },
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
