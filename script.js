document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let nama = document.getElementById("nama").value;
    let tanggal = document.getElementById("tanggal").value;
    let jumlah = document.getElementById("jumlah").value;

    document.getElementById("result").innerHTML =
        `Booking berhasil! <br>
        Nama: ${nama} <br>
        Tanggal: ${tanggal} <br>
        Jumlah Tiket: ${jumlah}`;
});
