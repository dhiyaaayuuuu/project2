let daftarTugas = [];

document.getElementById("btnTambah").addEventListener("click", tambahTugas);
document.getElementById("btnConsole").addEventListener("click", tampilkanConsole);

function tambahTugas() {
    const input = document.getElementById("inputTugas");
    const namaTugas = input.value.trim();

    if (namaTugas === "") {
        alert("Isi Terlebih Dahulu Tugasnya");
        return;
    }

    const tugasBaru = {
        nama: namaTugas,
        status: "Belum"  
    };

    daftarTugas.push(tugasBaru);      
    tampilkanKeTabel(tugasBaru);

    input.value = "";
}

function tampilkanKeTabel(tugasObj) {
    const tbody = document.getElementById("tugasTable").querySelector("tbody");
    const row = document.createElement("tr");

    const colTugas = document.createElement("td");
    colTugas.textContent = tugasObj.nama;

  
    const colStatus = document.createElement("td");
    colStatus.textContent = tugasObj.status;
    colStatus.style.cursor = "pointer";
    colStatus.style.color = "blue";

    colStatus.addEventListener("click", function () {
        tugasObj.status = tugasObj.status === "Belum" ? "Selesai" : "Belum";
        colStatus.textContent = tugasObj.status;
    });

    row.appendChild(colTugas);
    row.appendChild(colStatus);
    tbody.appendChild(row);
}

function tampilkanConsole() {
    console.log("Daftar Tugas:");
    daftarTugas.forEach((t, i) => {
        console.log(`${i + 1}. ${t.nama} - ${t.status}`);
    });
}
