
const Modal = () => {

  const handleForm = (e) => {
    e.preventDefault()
    const candidateName = e.target[0].value
    const subject = e.target[1].value
    const email = e.target[2].value
    const phone = e.target[3].value
    const address = e.target[4].value
    const dob = e.target[5].value
    const image = e.target[6].value

    const data = {
      candidateName,
      subject,
      email,
      phone,
      address,
      dob,
      image
    }
    console.log(data)
  }

  return (
    <>
      <dialog id="modal" className="modal">
        <div className="modal-box w-11/12 max-w-2xl">
          <h3 className="font-bold text-lg mb-5">Admission Form</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <form onSubmit={handleForm}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="form-control">
                <label htmlFor="candidateName">Candidate Name</label>
                <input type="text" id="candidateName" placeholder="Type here" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="Type here" className="input input-bordered w-full" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Type here" className="input input-bordered w-full" required />
              </div>
              <div className="form-control">
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="Type here" className="input input-bordered w-full" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
              <div className="form-control">
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="Type here" className="input input-bordered w-full" />
              </div>
              <div className="form-control">
                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" className="input input-bordered w-full" />
              </div>
            </div>
            <div className="form-control my-3">
              <label htmlFor="image">Image URL</label>
              <input type="text" id="image" placeholder="Type here" className="input input-bordered w-full" />
            </div>
            <div className="form-control">
              <button className="btn btn-outline btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Modal