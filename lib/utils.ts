import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImgUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL || '';
  // 如果 path 已经是完整 URL，直接返回
  if (path.startsWith('http')) return path;
  
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // 如果没有配置 baseUrl，回退到本地 public 路径
  if (!baseUrl) return normalizedPath;
  
  // 拼接 R2 路径：baseUrl + /portfolio + normalizedPath
  return `${baseUrl}/portfolio${normalizedPath}`;
}
