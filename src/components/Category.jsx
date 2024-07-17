import React, { useEffect } from "react";
import VideoCard from "./VideoCard";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {
  addCategoryApi,
  deleteCategoryApi,
  getAllCategoryApi,
  updateCategoryApi,
} from "../services/allApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category({ dragOut, setDragOut }) {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [allCategory, setAllCategory] = useState([]);
  const [addStatus, setAddStatus] = useState(false);
  const [updateStatus, setUpdateStatus] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("");
  };
  const handleShow = () => setShow(true);
  console.log(categoryName);

  const handleCategoryAdd = async () => {
    if (categoryName) {
      const reqBody = {
        categoryName,
        allVideos: [],
      };
      const result = await addCategoryApi(reqBody);
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setCategoryName("");
        handleClose();
        // toast.success("Category added successfully");
        setAddStatus(true);
      }
    } else {
      toast.info("Please add a category name");
    }
  };

  const getCategory = async () => {
    const result = await getAllCategoryApi();
    setAllCategory(result.data);
  };

  console.log(allCategory);

  const handleDeleteCategory = async (id) => {
    await deleteCategoryApi(id);
    setAddStatus(true);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  const videoDrop = async (e, categoryItem) => {
    // console.log("category is:", categoryItem);
    const vDetails = JSON.parse(e.dataTransfer.getData("videoDetails"));
    // console.log(vDetails);
    if (categoryItem.allVideos.find((item) => item.id === vDetails.id)) {
      toast.error("video already exist in the category");
    } else {
      categoryItem.allVideos.push(vDetails);
      const result = await updateCategoryApi(categoryItem.id, categoryItem);
      setUpdateStatus(true);
      console.log(result);
      // toast.success("video added successfully");
    }
  };

  const ondrag = (e, videoId, categoryDetails) => {
    console.log(videoId, categoryDetails);
    const dataShare = {
      videoId,
      categoryDetails,
    };
    e.dataTransfer.setData("dataShare", JSON.stringify(dataShare));
  };

  useEffect(() => {
    setAddStatus(false);
    setUpdateStatus(false);
    setDragOut(false);
    getCategory();
  }, [addStatus, updateStatus, dragOut]);

  return (
    <>
      <h5 className="mt-5 mt-md-0">Category</h5>
      <button className="btn btn-warning w-100 mt-4" onClick={handleShow}>
        Add Category
      </button>
      {allCategory?.length > 0 ? (
        allCategory?.map((item) => (
          <div
            className="p-3 border rounded mt-4"
            droppable
            onDragOver={(e) => dragOver(e)}
            onDrop={(e) => videoDrop(e, item)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-4">{item.categoryName}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteCategory(item.id)}
              >
                <FontAwesomeIcon icon={faTrashCan} />
              </button>
            </div>
            {item.allVideos?.length > 0
              ? item?.allVideos?.map((video) => (
                  <div draggable onDragStart={(e) => ondrag(e, video.id, item)}>
                    <VideoCard video={video} isPresent={true} />
                  </div>
                ))
              : null}
          </div>
        ))
      ) : (
        <p>No category added yet</p>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="p-3 border rounded">
            <input
              type="text"
              className="form-control"
              placeholder="Category name"
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleCategoryAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-center" theme="colored" autoClose={2000} />
    </>
  );
}

export default Category;
