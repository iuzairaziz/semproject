const Footer = () => {
  return (
    <footer>
      <div className="row-footer row">
        <div className="col-4">
          <h1 className="text-left mt-1">About Us</h1>
          <p className="text-left mt-1">Mall Timings: 10:00-12:00</p>
          <p className="text-left mt-1">Office Timings: 11:00-08:00</p>
        </div>
        <div className="col-4">
          <h1 className="text-center mt-1">Contact Us</h1>
          <p className="text-center mt-1">makkicomplex@gmail.com</p>
          <p className="text-center mt-1">0320-8889889</p>
        </div>
        <div className="col-4">
          <ul className="list-inline social-icons float-right">
            <li className="list-inline-item">
              <a href="#" className="fa fa-facebook"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-twitter"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-google"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-instagram"></a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="row-footer row">
        <div className="col-12">
          <ul className="list-inline social-icons float-right">
            <li className="list-inline-item">
              <a href="#" className="fa fa-facebook"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-twitter"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-google"></a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="fa fa-instagram"></a>
            </li>
          </ul>
          <h1 className="text-center mt-1">Contact Us</h1>
          <p className="text-center mt-1">makkicomplex@gmail.com</p>
          <p className="text-center mt-1">0320-8889889</p>
          <h1 className="text-left mt-1">About Us</h1>
          <p className="text-left mt-1">Mall Timings: 10:00-12:00</p>
          <p className="text-left mt-1">Office Timings: 11:00-08:00</p>
        </div>
      </div>  */}
    </footer>
  );
};

export default Footer;
