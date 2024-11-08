
// first box start 

function toggleContent() {
    const content = document.getElementById("netflixContent");
    const verticalLine = document.getElementById("verticalLine");
    const horizontalLine = document.getElementById("horizontalLine");
    const icon = document.getElementById("toggleIcon");

    if (content.style.display === "none") {
        // Show content
        content.style.display = "block";
        // Change icon to cross (x)
        verticalLine.setAttribute("x1", "4");  // Adjust vertical line to form a cross
        verticalLine.setAttribute("x2", "20");
        verticalLine.setAttribute("y1", "4");
        verticalLine.setAttribute("y2", "20");

        horizontalLine.setAttribute("x1", "4"); // Adjust horizontal line for the cross
        horizontalLine.setAttribute("x2", "20");
        horizontalLine.setAttribute("y1", "20");
        horizontalLine.setAttribute("y2", "4");

        // Move the icon to the right when content is shown
        icon.style.right = "10px";
        icon.style.top = "10px";

    } else {
        // Hide content
        content.style.display = "none";
        // Change icon back to plus (+)
        verticalLine.setAttribute("x1", "12");  // Reset vertical line to form plus
        verticalLine.setAttribute("x2", "12");
        verticalLine.setAttribute("y1", "4");
        verticalLine.setAttribute("y2", "20");

        horizontalLine.setAttribute("x1", "4"); // Reset horizontal line for the plus
        horizontalLine.setAttribute("x2", "20");
        horizontalLine.setAttribute("y1", "12");
        horizontalLine.setAttribute("y2", "12");

        // Move the icon back to its original position
        icon.style.right = "10px";
        icon.style.top = "10px";
    }
}



// first box end