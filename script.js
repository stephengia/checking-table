var stt = 0;
function addProduct() {
  var x = document.getElementById("out_table");
  var xl = x.rows.length;
  let n = 0;
  let pname = document.getElementById("name").value;
  let hc = document.getElementById("hc").value;
  let dvt = document.getElementById("dvt").value;
  let use = document.getElementById("use").value;
  let type = document.getElementById("type").value;
  let sl = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  let date = document.getElementById("date").value;
  for (let i = 1; i < xl; i++) {
    if (x.rows[i].cells[2].innerHTML == hc) {
      n++;
    }
  }
  if (n != 0) {
    let c = confirm(
      "Hoạt chất '" +
        hc +
        "' đã được kê từ trước!\nBạn có chắc chắn muốn thêm vào không?"
    );
    if (c == true) {
      stt++;
      let total = sl * Number(price);
      addcart(stt, pname, hc, dvt, use, type, date, sl, price, total);
      document.getElementById("name").value = "";
      document.getElementById("hc").value = "";
      document.getElementById("type").value = "";
      document.getElementById("use").value = "";
      document.getElementById("dvt").value = "";
      document.getElementById("quantity").value = "0";
      document.getElementById("date").value = "";
      document.getElementById("price").value = "";
    }
  } else {
    stt++;
    let total = sl * Number(price);
    addcart(stt, pname, hc, dvt, use, type, date, sl, price, total);
    document.getElementById("name").value = "";
    document.getElementById("hc").value = "";
    document.getElementById("type").value = "";
    document.getElementById("use").value = "";
    document.getElementById("dvt").value = "";
    document.getElementById("quantity").value = "0";
    document.getElementById("date").value = "";
    document.getElementById("price").value = "";
  }
}

function addcart(stt, pname, hc, dvt, use, type, date, sl, price, total) {
  let cart = document.querySelector("#out_table tbody");
  let addtr = document.createElement("tr");

  let trcontent =
    "<tr><td class='stt'>" +
    stt +
    "</td><td>" +
    pname +
    "</td><td>" +
    hc +
    "</td><td>" +
    dvt +
    "</td><td>" +
    use +
    "</td><td>" +
    type +
    "</td><td>" +
    date +
    "</td><td>" +
    sl +
    "</td><td>" +
    price +
    "</td><td>" +
    total +
    "</td></tr>";
  addtr.innerHTML = trcontent;
  cart.append(addtr);
  rows();
}

function rows() {
  var x = document.getElementById("out_table");
  var xl = x.rows.length;
  for (var i = 1; i < xl; i++) {
    x.rows[i].onclick = function () {
      if (this.style.background === "red") {
        this.style.background = "transparent";
      } else {
        this.style.background = "red";
      }
    };
  }
}

function delete_multi() {
  var x = document.getElementById("out_table");
  var xl = x.rows.length;
  let n = 0;
  for (let i = 0; i < xl; i++) {
    if (x.rows[i].style.background == "red") {
      x.deleteRow(i);
      i = 0;
      xl--;
    }
  }
  for (let i = 1; i < xl; i++) {
    x.rows[i].cells[0].innerHTML = i;
  }
  stt = xl - 1;
}
