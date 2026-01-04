"use client";

import React from "react";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { Button } from "@/components/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";

const navigationItems = [
	{
		label: "Products",
		items: ["Timber Flooring", "Hybrid Ranges", "Laminate Floors", "Vinyl Planks"],
	},
	{
		label: "Brands",
		items: ["European Collections", "Australian Suppliers", "Premium Imports"],
	},
	{
		label: "Resources",
		items: ["Design Guides", "Care & Maintenance", "FAQs"],
	},
];

export default function NavigationBar() {
	const [menuOpen, setMenuOpen] = React.useState(false);

	React.useEffect(() => {
		if (!menuOpen) {
			return;
		}

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setMenuOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [menuOpen]);

	return (
		<header className="border-b border-black/10 bg-[var(--color-surface)] py-6">
			<div className="animate-ui-fade-down mx-auto flex max-w-6xl items-center justify-between px-4">
				<div className="flex items-center gap-4">
					<img
						src="/images/maywoodflooringlogo.jpg"
						alt="Maywood Flooring Logo"
						className="animate-ui-hover-lift h-[65px] w-auto"
					/>
				</div>

				<nav className="hidden items-center gap-4 md:flex">
					{navigationItems.map((item) => (
						<DropdownMenu key={item.label}>
							<DropdownMenuTrigger asChild>
								<Button
									type="button"
									variant="ghost"
									size="sm"
									className="gap-2 px-3 py-2 text-sm font-medium"
								>
									{item.label}
									<FiChevronDown className="text-base" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end">
								{item.items.map((entry) => (
									<DropdownMenuItem key={entry}>{entry}</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					))}
					<Button
						type="button"
						variant="ghost"
						size="icon"
						aria-label="Search"
						className="text-[rgba(90,79,79,0.9)]"
					>
						<FiSearch className="text-lg" />
					</Button>
				</nav>

				<div className="relative md:hidden">
					<Button
						type="button"
						variant="ghost"
						size="icon"
						aria-expanded={menuOpen}
						aria-controls="mobile-navigation"
						aria-label="Toggle menu"
						onClick={() => setMenuOpen((open) => !open)}
						className="text-[rgba(90,79,79,0.9)]"
					>
						{menuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
					</Button>
					<div
						id="mobile-navigation"
						className={`absolute right-0 top-12 w-48 rounded-xl border border-black/10 bg-white py-2 text-sm shadow-lg transition ${
							menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
						} ${menuOpen ? "animate-ui-fade-down" : ""}`}
					>
						{["Products", "Brands", "Resources", "Search"].map((label) => (
							<Button
								key={label}
								type="button"
								variant="ghost"
								size="sm"
								className="w-full justify-between rounded-lg px-4 py-2 text-left font-medium"
								onClick={() => setMenuOpen(false)}
							>
								{label}
								{label !== "Search" && <FiChevronDown className="text-base" />}
								{label === "Search" && <FiSearch className="text-base" />}
							</Button>
						))}
					</div>
				</div>
			</div>
		</header>
	);
}
