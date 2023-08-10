import "./update.css";

export default function Update() {
  return (
    <>
      <div className="update">
        <div className="updatebox">
          <div className="updatetitle">
            <span className="update1">Update Your Account</span>
            <span className="update2">Delete Account</span>
          </div>
          <form className="updateform">
            <label className="pp">Profile Picture</label>
            <div className="updatePP">
              <div className="updateimg"></div>
              <label htmlFor="fileinput">
                <i class="updateicon fa-regular fa-circle-user"></i>
              </label>
              <input type="file" id="fileinput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="palak" className="perdet" />
            <label>Email</label>
            <input type="email" placeholder="palak@gmail.com" className="perdet"
             />
            <label>Password</label>
            <input type="password" className="perdet" />
            <button className="updatesubmit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}
