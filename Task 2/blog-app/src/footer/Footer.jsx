import "./footer.css"

export default function Footer() {
  return (
    <>
      <div className="footerSection">
      <div className="footerSectionitem">
      <div className="leftfooterrow">
          <div className="footerTitle">
            Quick Link
          </div>
          <ul className='footerlist'>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">About</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Contact Us</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Help</li></i>
          <i className="fa-solid fa-arrow-right footericon"><li className="footerlistitem">Login</li></i>
          </ul>
        </div>
        <div className="rightfooterrow">
          <div className="footerTitle">
            Contact Us
          </div>
          <ul className='footerlist'>
          <i className="fa-solid fa-location-dot footericon">
            <li className="footerlistitem">
              30,Alka Puri Tegore Nagar Dayal Bagh, Agra(282005)
            </li>
          </i>
          <i className="fa-solid fa-phone footericon">
            <li className="footerlistitem">
              +91 7060188020
            </li>
          </i>
          <i className="fa-solid fa-envelope footericon">
            <li className="footerlistitem">
              palakgupta2911@gmail.com
            </li>
          </i>  
          </ul>
        </div>
      </div>
        <div className="copyright">
          <span>© Blog </span>
          <span>All Rights Reserved By Blog</span>
        </div>
    </div>
    </>
  )
}
