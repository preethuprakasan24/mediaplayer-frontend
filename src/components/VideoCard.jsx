import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { addVideoHistoryApi, deleteVideoApi } from "../services/allApi";

function VideoCard({ video, setDeleteVideoStatus, isPresent }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const caption = video?.caption;
    const url = video?.embedLink;
    const time = new Date();
    // console.log(time);
    const timeStamp = new Intl.DateTimeFormat("en-GB", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(time);
    console.log(timeStamp);

    const reqBody = {
      caption,
      url,
      timeStamp,
    };
    const result = await addVideoHistoryApi(reqBody);
    console.log(result);
  };
  const handleDelete = async (id) => {
    const result = await deleteVideoApi(id);
    console.log(result);
    setDeleteVideoStatus(result.data);
  };

  const videoDrag = (e, video) => {
    // console.log(video);
    // console.log(`dragged video id is ${id}`);
    e.dataTransfer.setData("videoDetails", JSON.stringify(video));
  };
  return (
    <>
      <Card
        style={{ width: "100%" }}
        draggable
        onDragStart={(e) => videoDrag(e, video)}
        className="mt-4"
      >
        {!isPresent && (
          <Card.Img
            onClick={handleShow}
            variant="top"
            src={video?.imageUrl}
            height={"300px"}
          />
        )}
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Text>{video?.caption}</Card.Text>
            {!isPresent && (
              <Button variant="danger" onClick={() => handleDelete(video?.id)}>
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="514"
            src={`${video?.embedLink}?autoplay=1`}
            title="BRAHMĀSTRA (Malayalam) | Kunkumamaake | Ranbir | Alia | Pritam | Hesham Abdul Wahab &amp; Sid Sriram"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default VideoCard;
