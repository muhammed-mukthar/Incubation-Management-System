
const ApplicationModel = require("../model/applicationModel");
const Slot = require("../model/Slots");
const Admin = require("../model/admin");
const Cryptojs = require("crypto-js");
const jwt = require("jsonwebtoken");

const AdminLogin=async (req, res) => {
    let err = "invalid details";
  
    const AdminLogin = await Admin.findOne({ email: req.body.email });
    if (!AdminLogin) {
      res.status(401).json({ err: err });
    } else {
      console.log(AdminLogin);
      const hashedPassword = Cryptojs.AES.decrypt(
        AdminLogin.password,
        process.env.PASS_SEC
      );
      const Originalpassword = hashedPassword.toString(Cryptojs.enc.Utf8);
      if (Originalpassword != req.body.password) {
        res.status(401).json({ err: err });
      } else {
        const accessToken = jwt.sign(
          {
            id: AdminLogin._id,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );
        res.status(200).json({ AdminLogin, accessToken });
      }
    }
  }


const AllApplications=async (req, res, next) => {
    let data=await  ApplicationModel.find({})
          if(data){
                res.json(data);
          }else{
            res.json({ err: err });
          }
    }

const ApproveRequest=async (req, res, next) => {
    const id = req.params.id;
    ApplicationModel.findOneAndUpdate({ _id: id }, { $set: { isApproved: true } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch(() => {
        let err = "Something went wrong!";
        res.json({ err: err });
      });
  }

  const DeclineRequest=async (req, res, next) => {
    const id = req.params.id;
    ApplicationModel.findOneAndUpdate({ _id: id }, { $set: { isDeclined: true } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch(() => {
        let err = "Something went wrong!";
        res.json({ err: err });
      });
  }

  const PendingRequests=async (req, res, next) => {
    const id = req.params.id;
    ApplicationModel.findOneAndUpdate({ _id: id }, { $set: { isPending: true } })
      .then((data) => {
        res.json({ data: data });
      })
      .catch(() => {
        let err = "Something went wrong!";
        res.json({ err: err });
      });
  }

  const ApprovedForm=async (req, res) => {
    ApplicationModel.find({ isApproved: true })
      .then((data) => {
        res.json({ info: data });
      })
      .catch((err) => {
        res.json(err);
      });
  }

  const BookingSlots=async (req, res, next) => {
    let appId = req.params.id;
    let { val, index } = req.body;
    let char = val[index].slot;
    ApplicationModel.findOneAndUpdate(
      { _id: appId },
      { $set: { isBooked: true, slotId: char } }
    )
      .then((data) => {
        data.isBooked = true;
        data.slotId = char;
        res.json({ data });
      })
      .catch((err) => {
        console.log(err);
        err = "Something went wrong!";
        res.json({ err: err });
      });
  }


  const AllSolts=async (req, res, next) => {
    Slot.find()
      .then((response) => {
        console.log(response, "fsfssf");
        res.json(response[0]);
      })
      .catch((err) => {
        console.log(err);
        err = "Something went wrong!";
        res.json({ err: err });
      });
  }
  module.exports={AdminLogin,AllApplications,ApproveRequest,DeclineRequest,PendingRequests,ApprovedForm,BookingSlots,AllSolts}