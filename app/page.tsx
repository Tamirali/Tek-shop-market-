"use client";
import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

export default function TekShopMarket() {
    // आपके द्वारा दिए गए Firebase क्रेडेंशियल्स
    const firebaseConfig = {
        apiKey: "AIzaSyB2SMSDYTHBDPpkBb1LJOwES6_HdIKOGSw",
        authDomain: "tek-shop-markit.firebaseapp.com",
        projectId: "tek-shop-markit",
        storageBucket: "tek-shop-markit.firebasestorage.app",
        messagingSenderId: "702115769672",
        appId: "1:702115769672:web:70a98dcf35d4aef68cd77d"
    };

    const [db, setDb] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
    const [status, setStatus] = useState("active");
    const [isAdmin, setIsAdmin] = useState(false);

    // ओनर के सुरक्षित क्रेडेंशियल्स
    const MASTER_PIN = "tamir@lI00769";
    const OWNER_WA = "918797221991";

    useEffect(() => {
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);
        setDb(database);

        // स्टेटस और प्रोडक्ट्स का रियल-टाइम सिंक
        onValue(ref(database, 'settings/status'), (snap) => setStatus(snap.val() || "active"));
        onValue(ref(database, 'products'), (snap) => {
            const data = snap.val();
            if (data) {
                const list = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setProducts(list);
            }
        });
    }, []);

    const checkPin = () => {
        const pin = prompt("ओनर सुरक्षा कोड (PIN) दर्ज करें:");
        if (pin === MASTER_PIN) setIsAdmin(true);
        else alert("गलत पिन!");
    };

    const handleOrder = (name: string, price: string) => {
        const msg = `नमस्ते, मैं Tek-Shop-Market से ऑर्डर देना चाहता हूँ: \nसामान: ${name} \nकीमत: ₹${price}`;
        window.open(`https://wa.me/${OWNER_WA}?text=${encodeURIComponent(msg)}`);
    };

    return (
        <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <header style={{ background: 'linear-gradient(135deg, #1e3a8a, #1e40af)', color: 'white', padding: '30px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                <h1>Tek-Shop-Market</h1>
                <p>अक्ल की जीत, सच्चाई का व्यापार</p>
            </header>

            <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
                <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '20px', borderLeft: '8px solid #1a73e8' }}>
                    <h2>Project Owner: Tamir Ali</h2>
                    <p>WhatsApp: +91 8797221991</p>
                </div>

                {status === 'hold' && !isAdmin ? (
                    <div style={{ border: '2px solid red', padding: '40px', textAlign: 'center', background: 'white', borderRadius: '10px' }}>
                        <h2 style={{ color: 'red' }}>⚠️ प्रोजेक्ट होल्ड पर है</h2>
                        <p>ओनर ने इस दुकान को अस्थायी रूप से बंद कर दिया है।</p>
                        <p>संपर्क करें: +91 8797221991</p>
                    </div>
                ) : (
                    <div id="productList">
                        {products.map((p: any) => (
                            <div key={p.id} style={{ background: 'white', margin: '15px 0', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                                <img src={p.img || 'https://via.placeholder.com/300'} style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '8px' }} />
                                <h2 style={{ marginTop: '15px' }}>{p.name}</h2>
                                <p style={{ color: '#1a73e8', fontWeight: 'bold', fontSize: '24px' }}>₹{p.price}</p>
                                <button onClick={() => handleOrder(p.name, p.price)} style={{ background: '#25d366', color: 'white', border: 'none', padding: '15px', width: '100%', borderRadius: '8px', cursor: 'pointer', fontSize: '18px', fontWeight: 'bold' }}>
                                    अभी ऑर्डर करें (WhatsApp)
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                
                <button onClick={checkPin} style={{ marginTop: '40px', padding: '15px', width: '100%', background: '#ce1126', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                    <i className="fas fa-user-shield"></i> ओनर पैनल खोलें
                </button>
            </div>
        </div>
    );
}
