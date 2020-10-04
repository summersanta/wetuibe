import express from "express";

const userRouter = express.Router();

userRouter.get(routes.users, (req, res) => res.send("Users"));
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, (req, res) => res.send("Edit Profile"));
userRouter.get(routes.changePassword, (req, res) => res.send("Change Password"));

export default userRouter;



/*
Model Data : 데이터
View how does the data look : 데이터가 어떻게 생겼는지
Controller function that looks for the data : 데이터를 보여주는 함수 , 패턴, 스트럭쳐 같은 것
*/
