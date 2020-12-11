import express from "express";
import { changePassword, editProfile, userDetail } from "../controllers/userController";
import routes from "../routes";


const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail(), userDetail);


export default userRouter;



/*
Model Data : 데이터
View how does the data look : 데이터가 어떻게 생겼는지
Controller function that looks for the data : 데이터를 보여주는 함수 , 패턴, 스트럭쳐 같은 것
*/
