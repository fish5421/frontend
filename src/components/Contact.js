import React from "react";

class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: "",
      fNameValue: "",
    };
  }

  render() {
    return (
      <div id = "contact" class="flex justify-center items-center bg-yellow-400 mt-32 h-auto w-screen flex-col">
        <h1 class="pt-10 text-white text-xl font-bold">Stay in touch</h1>

        <form
          class="pb-8 mb-4 border-none focus:outline-none focus:ring-transparent shadow-none"
          action="https://gmail.us5.list-manage.com/subscribe/post"
          method="POST"
          noValidate
        >
          <input type="hidden" name="u" value="ef5f49a163cb7a6928ffe830b" />
          <input type="hidden" name="id" value="2d86fa3a20" />
          <label htmlFor="MERGE1">
            <input
              class="bg-opacity-70 bg-white rounded-none"
              type="text"
              name="FNAME"
              id="MERGE1"
              placeholder="Enter First Name"
              value={this.state.fNameValue}
              onChange={(e) => {
                this.setState({ fNameValue: e.target.value });
              }}
            />
          </label>
          <label htmlFor="MERGE0">
            <input
              class="bg-opacity-70 bg-white rounded-none"
              type="email"
              name="EMAIL"
              id="MERGE0"
              placeholder="Enter Email"
              value={this.state.emailValue}
              onChange={(e) => {
                this.setState({ emailValue: e.target.value });
              }}
              autoCapitalize="off"
              autoCorrect="off"
            />
          </label>

          <button
            class="mb-2 w-full inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-normal uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out outline-green-600"
            // type="submit"
            // value="Subscribe"
            // name="subscribe"
            // id="mc-embedded-subscribe"
            // className="button"
          >
            {" "}
            Subscribe{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default SubscribePage;
