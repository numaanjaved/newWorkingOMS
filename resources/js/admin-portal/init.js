function init(setValue) {
    if (setValue == null) {
        setValue = "";
    }
    // Clear forms here
    //	document.getElementById("start_date").value = "";
    document.getElementById("to").value = setValue;
}
init("");
window.onload = init;


