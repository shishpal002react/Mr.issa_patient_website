/** @format */

const SendMessage = ({
    document,
    setNewMessage,
    newMessage,
    handleOnSubmit,
  }) => {
    return (
      document && (
        <div className="chat-box">
          <div className="ttt">
            {document?.reply?.length > 0 ? (
              document?.reply?.map((i, index) => (
                <div
                  className={i.type === "sender" ? "left" : "right"}
                  key={`document${index}`}
                >
                  <div className="img-container">
                    <img
                      src={
                        i.type === "sender"
                          ? document?.user?.avatar
                          : document?.reciver?.avatar
                      }
                      alt=""
                    />
                    <span>
                      <span style={{ textDecoration: "underline" }}>
                        {" "}
                        {i.type === "sender"
                          ? document?.user?.name
                          : document?.reciver?.name}
                      </span>
                      {i.date && (
                        <span className="date">
                          ( {i.date?.slice(0, 10)} {i.date?.slice(11, 16)} )
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="text"> {i.text} </p>
                </div>
              ))
            ) : (
              <span>No Previous Chat Found !</span>
            )}
          </div>
  
          <form onSubmit={handleOnSubmit}>
            <div className="send_button">
              <input
                type="text"
                onChange={(e) => setNewMessage(e.target.value)}
                value={newMessage}
              />
              <button type="submit">Send </button>
            </div>
          </form>
        </div>
      )
    );
  };
  export default SendMessage;