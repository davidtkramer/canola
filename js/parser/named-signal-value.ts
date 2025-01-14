/**
 * Represents a named value of a signal.
 *
 * Named values map an integer number to a human-readable
 * string. Some file formats like ARXML support specifying
 * descriptions for the named value.
 */
export class NamedSignalValue {
  // The text intended for human consumption which the specified integer is mapped to
  public readonly name: string;

  // The integer value that gets mapped
  public readonly value: number;

  /**
   * The descriptions of the named value
   *
   * This is a dictionary containing the descriptions in multiple
   * languages. The dictionary is indexed by the language.
   *
   * Example:
   * ```typescript
   * // retrieve the English comment of the named value or an empty
   * // string if none was specified.
   * namedValue.comments["EN"] ?? ""
   * ```
   */
  public readonly comments: Record<string, string>;

  constructor(value: number, name: string, comments?: Record<string, string>) {
    this.name = name;
    this.value = value;
    this.comments = comments ?? {};
  }

  toString(): string {
    return this.name;
  }

  equals(other: unknown): boolean {
    if (other instanceof NamedSignalValue) {
      return (
        other.value === this.value &&
        other.name === this.name &&
        JSON.stringify(other.comments) === JSON.stringify(this.comments)
      );
    }
    if (typeof other === "string") {
      return other === this.name;
    }
    return false;
  }
}
