const cursor = document.querySelector(".cursor")

document.addEventListener("mousemove", (event) => {
    cursor.style.top = event.pageY - 15 + "px"
    cursor.style.left = event.pageX - 15 + "px"
})

