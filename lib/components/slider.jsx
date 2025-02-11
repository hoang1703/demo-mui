"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper/core";
import { Navigation, Pagination } from "swiper/modules";
import { Modal, IconButton, Box } from "@mui/material";
import { IoDocumentTextOutline } from "react-icons/io5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FileSlider = ({ files }) => {
  SwiperCore.use([Navigation, Pagination]);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleOpen = (file) => {
    setSelectedFile(file);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedFile(null);
  };

  const renderFile = (file) => {
    const extension = file.name.split(".").pop().toLowerCase();

    if (["jpg", "jpeg", "png", "gif"].includes(extension)) {
      return (
        <img
          src={file.url}
          alt={file.name}
          className="h-full w-full object-contain"
        />
      );
    }

    if (["mp4", "webm", "ogg"].includes(extension)) {
      return (
        <video controls className="h-full w-full">
          <source src={file.url} type={`video/${extension}`} />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (["pdf", "xml"].includes(extension)) {
      return (
        <div className="flex flex-col items-center justify-center h-full">
          <IoDocumentTextOutline />
          <button
            onClick={() => handleOpen(file)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            View File
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="relative" style={{ maxWidth: 600 }}>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        // }}
        className="h-96"
      >
        {files.map((file, index) => (
          <SwiperSlide
            key={index}
            // className="bg-gray-100 rounded-lg overflow-hidden"
          >
            {renderFile(file)}
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="file-viewer-modal"
        aria-describedby="file-viewer-modal"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg w-3/4 max-w-2xl">
          {/* Add your file reader component here later */}
          <div className="text-center p-8">
            <p>File viewer for: {selectedFile?.name}</p>
            <IconButton onClick={handleClose} className="mt-4">
              Close
            </IconButton>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default FileSlider;
