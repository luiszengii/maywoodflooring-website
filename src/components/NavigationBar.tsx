"use client";

import React from "react";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";

export default function NavigationBar() {
	const [menuOpen, setMenuOpen] = React.useState(false);

	return (
		<header className="border-b border-black/10 bg-[var(--color-surface)] py-6">
			<div className="mx-auto flex max-w-6xl items-center justify-between px-4">
				<div className="flex items-center gap-4">
					<img
						src="/images/maywoodflooringlogo.jpg"
						alt="Maywood Flooring Logo"
						className="h-[65px] w-auto transition-transform duration-300 hover:scale-105"
					/>
				</div>

				<nav className="hidden items-center gap-6 text-sm font-medium text-[rgba(90,79,79,0.8)] md:flex">
					{["Products", "Brands", "Resources"].map((label) => (
						<button
							key={label}
							type="button"
							className="flex items-center gap-2 rounded-full px-3 py-2 transition hover:bg-black/5"
						>
							{label}
							<FiChevronDown className="text-base" />
						</button>
					))}
					<button
						type="button"
						className="rounded-full p-2 transition hover:bg-black/5"
						aria-label="Search"
					>
						<FiSearch className="text-lg" />
					</button>
				</nav>

				<div className="relative md:hidden">
					<button
						type="button"
						aria-expanded={menuOpen}
						aria-label="Toggle menu"
						onClick={() => setMenuOpen((open) => !open)}
						className="rounded-full p-2 text-[rgba(90,79,79,0.8)] transition hover:bg-black/5"
					>
						{menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
					</button>
					<div
						className={`absolute right-0 top-12 w-48 rounded-xl border border-black/10 bg-white py-2 text-sm shadow-lg transition ${
							menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
						}`}
					>
						{["Products", "Brands", "Resources", "Search"].map((label) => (
							<button
								key={label}
								type="button"
								className="flex w-full items-center justify-between px-4 py-2 text-left text-[rgba(90,79,79,0.9)] transition hover:bg-black/5"
								onClick={() => setMenuOpen(false)}
							>
								{label}
								{label !== "Search" && <FiChevronDown className="text-base" />}
								{label === "Search" && <FiSearch className="text-base" />}
							</button>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
