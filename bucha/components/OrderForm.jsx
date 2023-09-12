import { baseUrl } from "@/pages/_app";
import axios from "axios";
import { useState } from "react";
import styles from "@/styles/OrderForm.module.css"

export default function OrderForm() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [orderConfirmed, setOrderConfirmed] = useState(false);
    const [orderError, setOrderError] = useState(false);

    function processOrder(e) {
        e.preventDefault();
        if (!credentialsValid) {
            alert("Polja za poručivanje nisu ispravno popunjena. Pokušajte ponovo.");
            return;
        }
        axios.post(`${baseUrl}/api`)
            .then(response => { console.log(response); setOrderError(false); setOrderConfirmed(true) })
            .catch(error => { console.log(error); setOrderError(true); setOrderConfirmed(false); });
    }

    function credentialsValid() {
        return fullName.trim().length > 1 && email.trim().length > 1 && email.includes("@") && email.includes(".") && phone.trim().length > 1;
    }

    return (
        <form className={styles.form} onSubmit={processOrder}>
            <div>
                <label htmlFor="fullname">Ime i prezime</label>
                <input type="text" id="fullname" name="fullname" value={fullName} onChange={(e) => setFullName(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="phone">Telefon</label>
                <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.currentTarget.value)} />
            </div>
            <div>
                <label htmlFor="phone">Adresa isporuke</label>
                <input type="text" id="phone" name="phone" value={address} onChange={(e) => setAddress(e.currentTarget.value)} />
            </div>
            <button className={styles.mainButton} type="submit"> <span>Poručite</span> </button>
            {orderConfirmed ? <p className={styles.err}>Porudžbina nije uspešno kreirana. Pokušajte ponovo malo kasnije!</p> : <></>}
            {orderError ? <p className={styles.err}>Porudžbina nije uspešno kreirana. Pokušajte ponovo malo kasnije!</p> : <></>}
        </form>
    );
}