import type { Dictionary, IConfig } from './_Types.js';
/**
 * Returns a copy of the current object which is constructed from tchmiconfig.json
 * @preserve (Part of the public API)
 */
export declare function get(): IConfig;
/**
 * Returns a Dictionary with all nuget packages of the project.
 * Key is the Nuget ID.
 * @preserve (Part of the public API)
 */
export declare function getNugetPackagesMetadata(): Dictionary<NugetPackageMetadata>;
/**
 * Information about a nuget package
 */
export interface NugetPackageMetadata {
    /** A comma-separated list of packages authors, matching the profile names on nuget.org. */
    authors: string;
    /** A description of the package for UI display. */
    description: string;
    /** A human-friendly title of the package which may be used in some UI displays. */
    title: string;
    /** The version of the package, following the major.minor.patch pattern. Version numbers may include a pre-release suffix as described in Package versioning. */
    version: string;
}
//# sourceMappingURL=Config.d.ts.map