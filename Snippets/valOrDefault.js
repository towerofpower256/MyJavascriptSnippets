// valOrDefault
// By David McDonald
// Return either the passed value, or a placeholder value if the passed value is null / undefined.
// Useful for UI functions where you want something visually informative to say "this is empty" instead of leaving something blank.

function valOrDefault(val, def="(empty)") {
    if (!val || val === "") return def;
    return val;
}

// Example - string or the message "empty";
  valOrDefault("asd"); // "asd";
  valOrDefault(""); // "(empty)";
  valOrDefault(undefined); // "(empty)";

// Example - custom default
  valOrDefault("asd", "-"); // "asd";
  valOrDefault("", "-"); // "-";
  valOrDefault(undefined, "-"); // "-";
