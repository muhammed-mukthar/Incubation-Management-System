
const {verifyAdminToken}=require('./verifytoken')
const router = require("express").Router();
const {AdminLogin,AllApplications,ApproveRequest,PendingRequests,DeclineRequest,ApprovedForm,BookingSlots,AllSolts}=require('../controller/adminController')

router.post("/login",AdminLogin );

router.get("/applications",verifyAdminToken,AllApplications);

router.get("/approve/:id",verifyAdminToken,ApproveRequest);

router.get("/decline/:id",verifyAdminToken,DeclineRequest);

router.get("/pending/:id",verifyAdminToken,PendingRequests);

router.get("/approved",verifyAdminToken,ApprovedForm );

router.post("/booking/:id", verifyAdminToken,BookingSlots);

router.get("/slots",verifyAdminToken, AllSolts);

module.exports = router;
