const socket = io();

let email = "";

const sendMessage = () => {
    const emailInput = document.getElementById("emailInput").value;
    const messageInput = document.getElementById("messageInput").value;

    const messageObject = {
        email: emailInput,
        message: messageInput,
    };

    email = emailInput;

    socket.emit("NEW-MESSAGE-TO-SAVE", messageObject);
};

socket.on("MESSAGE-SAVED", (message) => {
    if (message.email == email) {
        document.querySelector(
            "#messagesCenter"
        ).innerHTML += `<div id="${message._id}" class="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        <div>
            <span class="text-xs text-gray-500 leading-none"
                >${message.email}
            </span>
            <div class="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">${message.message}</p>
            </div>
            <span class="text-xs text-gray-500 leading-none"
                >${message.createdAt}
            </span>
        </div>
        <img
            class="flex-shrink-0 h-10 w-10 rounded-full"
            src="https://leadvictor.com/Contents/Images/user-avatar.png"
            alt=""
        />
    </div>`;
    } else {
        document.querySelector(
            "#messagesCenter"
        ).innerHTML += `<div id="${message._id}" class="flex w-full mt-2 space-x-3 max-w-xs">
        <div>
            <img
                class="flex-shrink-0 h-10 w-10 rounded-full"
                src="https://leadvictor.com/Contents/Images/user-avatar.png"
                alt=""
            />
            <span class="text-xs text-gray-500 leading-none"
                >${message.email}
            </span>
            <div class="text-white p-3 rounded-l-lg rounded-br-lg">
                <p class="text-sm">${message.message}</p>
            </div>
            <span class="text-xs text-gray-500 leading-none"
                >${message.createdAt}
            </span>
        </div>
    </div>`;
    }
});
