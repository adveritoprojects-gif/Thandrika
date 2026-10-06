import type { L } from "@/lib/language";

type MlLeaf = string;
type MlNode = MlLeaf | MlNode[] | { [key: string]: MlNode };

function isL(value: unknown): value is L {
  return (
    typeof value === "object" &&
    value !== null &&
    "en" in value &&
    typeof (value as L).en === "string"
  );
}

export function attachMl<T>(enTree: T, mlTree: MlNode): T {
  if (isL(enTree as unknown)) {
    const ml = typeof mlTree === "string" ? mlTree : (enTree as L).en;
    return { ...(enTree as L), ml } as T;
  }

  if (Array.isArray(enTree)) {
    const mlArr = Array.isArray(mlTree) ? mlTree : [];
    return enTree.map((item, index) =>
      attachMl(item, mlArr[index] ?? mlArr),
    ) as T;
  }

  if (typeof enTree === "object" && enTree !== null) {
    const mlObj =
      typeof mlTree === "object" && mlTree !== null && !Array.isArray(mlTree)
        ? mlTree
        : {};
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(enTree as object)) {
      out[key] = attachMl(
        (enTree as Record<string, unknown>)[key],
        (mlObj as Record<string, MlNode>)[key],
      );
    }
    return out as T;
  }

  return enTree;
}
