"use client";

import { useState } from "react";
import Link from "next/link";
import "./menu.css";

export default function Menu() {

    const [open, setOpen] = useState(false);

    function closeMenu() {
        setOpen(false);
    }

    return (
        <>
            {/* BOTÃO MENU */}
            {!open && (
                <button
                    className="menu-button"
                    onClick={() => setOpen(true)}
                >
                    ☰
                </button>
            )}


            {/* OVERLAY */}
            {open && (
                <div
                    className="menu-overlay"
                    onClick={closeMenu}
                />
            )}


            {/* SIDEBAR */}
            <aside className={`menu-sidebar ${open ? "open" : ""}`}>

                <div className="menu-header">

                    <h2>Farmácia</h2>

                    <button
                        className="close-button"
                        onClick={closeMenu}
                    >
                        ✕
                    </button>

                </div>


                <nav className="menu-nav">

                    <Link href="/Inicio" onClick={closeMenu}>
                        🏠 Início
                    </Link>

                    <Link href="/AdicionarRemedio" onClick={closeMenu}>
                        💊 Adicionar Remédio
                    </Link>

                    <Link href="/Lista" onClick={closeMenu}>
                        📋 Lista de Remédios
                    </Link>

                    <Link href="/receitas" onClick={closeMenu}>
                        🧾 Receitas
                    </Link>

                </nav>


                <div className="menu-footer">
                    Sistema Farmácia v1.0
                </div>

            </aside>
        </>
    );
}