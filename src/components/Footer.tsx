"use client";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiWechatFill } from "react-icons/ri";
import { SiXiaohongshu } from "react-icons/si";
import Copyright from "@/components/Copyright";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Footer() {
	return (
		<footer className="mt-8 bg-[var(--color-background)] pb-10 pt-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="grid gap-8">
					<Card className="p-6 md:p-8">
						<div className="grid gap-6 md:grid-cols-2">
							<div>
								<h3 className="text-[length:var(--font-size-h5)] font-semibold">
									Book a Consultation
								</h3>
								<p className="mt-2 text-sm text-[var(--color-muted)]">
									Tell us about your project and we will be in touch.
								</p>
								<form className="mt-4 flex flex-col gap-3" noValidate>
									<input
										type="text"
										name="name"
										placeholder="Name"
										className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
									/>
									<input
										type="email"
										name="email"
										placeholder="Email"
										className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
									/>
									<select
										name="project-type"
										defaultValue=""
										className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm"
									>
										<option value="" disabled>
											Select one
										</option>
										<option value="residential">Residential</option>
										<option value="commercial">Commercial</option>
										<option value="restoration">Restoration</option>
									</select>
									<Button
										type="submit"
										size="sm"
										className="w-fit"
									>
										Request consultation
									</Button>
								</form>
							</div>
							<div>
								<h4 className="text-base font-semibold">Contact info</h4>
								<p className="mt-2 text-sm text-[var(--color-foreground)]">
									Phone: (310) 555-0198
								</p>
								<p className="mt-1 text-sm text-[var(--color-foreground)]">
									Email: hello@maywoodfloors.com
								</p>
								<p className="mt-1 text-sm text-[var(--color-foreground)]">
									Showroom: 123 Maple Avenue, Maywood, CA 90270
								</p>
								<p className="mt-1 text-sm text-[var(--color-foreground)]">
									Hours: Mon–Fri 9am–6pm, Sat 10am–4pm
								</p>
							</div>
						</div>
					</Card>

					<div className="grid gap-8 md:grid-cols-[1fr_2fr_1fr] md:items-start">
						<div className="text-center md:text-left">
							<p className="text-sm font-bold tracking-wide">MAY WOOD FLOORS</p>
						</div>

						<div className="grid gap-6 text-sm sm:grid-cols-3">
							<div>
								<p className="font-semibold">Products</p>
								<div className="mt-2 flex flex-col gap-2 text-[var(--color-muted)]">
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Flooring Products
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Our ranges
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Find a Stockist
									</button>
								</div>
							</div>
							<div>
								<p className="font-semibold">Company</p>
								<div className="mt-2 flex flex-col gap-2 text-[var(--color-muted)]">
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										About us
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Contact us
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Sustainability
									</button>
								</div>
							</div>
							<div>
								<p className="font-semibold">Resources</p>
								<div className="mt-2 flex flex-col gap-2 text-[var(--color-muted)]">
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Customer portal
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Academy
									</button>
									<button type="button" className="text-left hover:text-[var(--color-foreground)]">
										Legal
									</button>
								</div>
							</div>
						</div>

						<div className="flex justify-center gap-3 text-xl text-[var(--color-foreground)] md:justify-end">
							<a
								href="#facebook"
								aria-label="Facebook"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<FaFacebookF />
							</a>
							<a
								href="#instagram"
								aria-label="Instagram"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<FaInstagram />
							</a>
							<a
								href="#youtube"
								aria-label="YouTube"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<FaYoutube />
							</a>
							<a
								href="#whatsapp"
								aria-label="WhatsApp"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<FaWhatsapp />
							</a>
							<a
								href="#wechat"
								aria-label="WeChat"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<RiWechatFill />
							</a>
							<a
								href="#xiaohongshu"
								aria-label="Xiaohongshu"
								className="rounded-full border border-[var(--color-border)] p-2 transition hover:bg-[var(--color-overlay)]"
							>
								<SiXiaohongshu />
							</a>
						</div>
					</div>

					<Copyright />
				</div>
			</div>
		</footer>
	);
}
