const catchError = require("../../utils/catchAsync");
const health = catchError ((req, res) =>{
    console.log("request ", req.params, req.url, req.headers, req.body, req.method);
    let{name, dest} = req.body;
    res.send({message: "reached health route", status: "success", body: req.body});
});

const health2 = (req, res) =>{
    console.log("request ", req.params, req.url, req.headers, req.body, req.method);
    let{name, dest} = req.body;
    res.send({message: "reached health route", status: "success", body: req.body});
};

module.exports = {
    health,
    health2
}