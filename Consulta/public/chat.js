const socket = io();

let time = new Date().toLocaleString();

socket.on("message_back", (data) => {
  render(data);
});

const render = (data) => {
  document.querySelector("#caja").innerHTML = data
    .map((x) => {
      return `
        <p class="text"> <strong class="text-mail"> ${x.author.name} </strong> ${x.author.time} : <i class="text-msg">${x.message}</i> </p>
        `;
    })
    .join(" ");
};

const addUser = () => {
  let obj = {
    author: {
      mail: document.querySelector("#mail").value,
      name: document.querySelector("#name").value,
      last_name: document.querySelector("#lastName").value,
      age: document.querySelector("#age").value,
      nickname: document.querySelector("#nickname").value,
      avatar: document.querySelector("#avatar").value,
      time: time,
    },
    message: document.querySelector("#message").value,
  };
  socket.emit("data_authors", obj);

  document.querySelector("#mail").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#age").value = "";
  document.querySelector("#nickname").value = "";
  document.querySelector("#avatar").value = "";
  document.querySelector("#message").value = "";

  return false;
};
