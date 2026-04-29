function removeDuplicate() {
    let input = document.getElementById("inputArray").value;
    let arr = input.split(",").map(item => item.trim());

    let uniqueArr = [...new Set(arr)];
    document.getElementById("result").innerText = "Result:" + uniqueArr.join(",");

    document.getElementById("inputArray").value = "";
}