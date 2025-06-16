import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import prettier from "eslint-config-prettier";
import importX from "eslint-plugin-import-x";
import unicorn from "eslint-plugin-unicorn";
import ts from "typescript-eslint";

const compat = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default ts.config(
	js.configs.recommended,
	ts.configs.strictTypeChecked,
	ts.configs.stylisticTypeChecked,
	...compat.config({ extends: ["next"], settings: { next: { rootDir: "." } } }),
	importX.flatConfigs.recommended,
	importX.flatConfigs.typescript,
	unicorn.configs.recommended,
	prettier,
	{
		ignores: [".next/", "out/", "node_modules/"],
	},
	{
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
			ecmaVersion: "latest",
			sourceType: "module",
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			eqeqeq: ["warn", "always", { null: "ignore" }],

			// TypeScript Rules
			"@typescript-eslint/consistent-type-exports": "warn",
			"@typescript-eslint/consistent-type-imports": "warn",
			"@typescript-eslint/explicit-function-return-type": "warn",
			"@typescript-eslint/explicit-member-accessibility": "warn",
			"@typescript-eslint/prefer-readonly": "warn",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ args: "all", argsIgnorePattern: "^_" },
			],
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-non-null-assertion": "warn",
			"@typescript-eslint/prefer-nullish-coalescing": "warn",
			"@typescript-eslint/prefer-optional-chain": "warn",
			"@typescript-eslint/consistent-type-definitions": ["error", "type"],
			"@typescript-eslint/restrict-template-expressions": [
				"warn",
				{
					allowNumber: true,
					allowBoolean: true,
				},
			],

			// Import Rules
			"import-x/namespace": "error",
			"import-x/order": [
				"warn",
				{
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true },
				},
			],

			// Unicorn Rules
			"unicorn/filename-case": [
				"error",
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					ignore: ["next-env.d.ts"],
				},
			],
			"unicorn/prevent-abbreviations": "off",
		},
	},
	{
		files: ["**/*.js"],
		...ts.configs.disableTypeChecked,
	},
	{
		files: ["eslint.config.mjs"],
		rules: {
			"import-x/no-named-as-default-member": "off",
			"import-x/no-named-as-default": "off",
		},
	},
);
