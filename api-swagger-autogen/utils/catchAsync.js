const catchError = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch((err) =>{
      console.log(
            "next", next
      )
      next(err);
      //console.error("from catchasync", err);
    });
  };
  
module.exports = catchError;
  