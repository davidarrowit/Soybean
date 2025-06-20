import type { FC } from "react";

import { ExternalLink } from "@components/ExternalLink";

export const MoreInformation: FC = () => {
	return (
		<p>
			For more information, consult:
			<ul className="mt-2 ml-4 list-inside list-disc space-y-1">
				<li>
					<ExternalLink
						target="_blank"
						href="https://walworth.extension.wisc.edu/files/2018/11/Nutrient-Application-Guidelines-for-Field-Vegetable-Fruit-Crops-in-WI-A2809.pdf"
					>
						Nutrient Application Guidelines for Field, Vegetable, and Fruit
						Crops in Wisconsin (A2809)
					</ExternalLink>
				</li>
				<li>
					<ExternalLink
						target="_blank"
						href="https://coolbean.info/library/documents/55586_03WINutrientGuide5.5x8.5_NoBleed_HR_FINAL.pdf"
					>
						55586_03 WI Nutrient Guide 5.5x8.5.indd
					</ExternalLink>
				</li>
				<li>
					<ExternalLink
						target="_blank"
						href="https://acsess.onlinelibrary.wiley.com/doi/10.2134/agronj2017.12.0699"
					>
						Secondary and Micronutrient Uptake, Partitioning, and Removal across
						a Wide Range of Soybean Seed Yield Levels | Agronomy Journal
					</ExternalLink>
				</li>
			</ul>
		</p>
	);
};
