import { commonAPI } from "./commonApi"
import { serverUrl } from "./serverUrl"

//api to add video

export const allVideoApi = async (reqBody) => {
    return await commonAPI('POST', `${serverUrl}/allVideos`, reqBody)
}

//api to get video
export const getAllVideoApi = async () => {
    return await commonAPI('GET', `${serverUrl}/allVideos`, "")
}

//api to delete video

export const deleteVideoApi = async (id) => {
    return await commonAPI('DELETE', `${serverUrl}/allVideos/${id}`, {})
}

//api to add video to watch history

export const addVideoHistoryApi = async (reqBody) => {
    return await commonAPI('POST', `${serverUrl}/history `, reqBody)
}

//api to get all video from history

export const getVideoHistoryApi = async () => {
    return await commonAPI('GET', `${serverUrl}/history`)
}

//api to delete a video from history

export const deleteVideoHistoryApi = async (id) => {
    return await commonAPI('DELETE', `${serverUrl}/history/${id}`, {})
}

//api to add category

export const addCategoryApi = async (reqBody) => {
    return await commonAPI('POST', `${serverUrl}/category`, reqBody)
}

//api to get all category
export const getAllCategoryApi = async () => {
    return await commonAPI('GET', `${serverUrl}/category`)
}

//api to delete category
export const deleteCategoryApi = async (id) => {
    return await commonAPI('DELETE', `${serverUrl}/category/${id}`, {})
}

//api to update category
export const updateCategoryApi = async(id, reqBody) => {
    return await commonAPI('PUT', `${serverUrl}/category/${id}`, reqBody)
}