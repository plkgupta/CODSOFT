import "./create.css"

export default function Create() {
  return (
    <>
      <div className="create">
        <h1 className="heading">Create New Post</h1>
        <div className="createimg"></div>
        <form className="cform">
            <div className="createbox">
              <label htmlFor="fileinput">
              <i className="createicon fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileinput" style={{display:"none"}}/>
              <input type="text" placeholder="Title" className="input" autoFocus={true}/>
            </div>
            <div className="createbox">
              <textarea placeholder="Tell your story..." type="text" className="input textarea"></textarea>
            </div>
            <button className="submit">Publish</button>
        </form>
      </div> 
      
    </>
  )
}
