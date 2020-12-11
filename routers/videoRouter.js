import express from "express";
import { getUpload, postUpload, videoDetail, deleteVideo, getEditVideo, postEditVideo } from "../controllers/videoController";
import routes from "../routes";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();


// Upload

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//Video Detail
videoRouter.get(routes.videoDetail(), videoDetail);
//Edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//Delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
