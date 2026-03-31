from PIL import Image
from collections import deque

src = r'C:\Users\sathw\.gemini\antigravity\brain\4e212d6e-6522-4a7e-883f-1576c5d1655d\media__1774934627161.png'
dst = r'c:\Users\sathw\Downloads\1137\konkala_upgraded\src\assets\logo.png'

img = Image.open(src).convert('RGBA')
w, h = img.size
pixels = img.load()
print(f'Image size: {w}x{h}')

# ── Step 1: FLOOD-FILL from edges to remove only outer background ──
# This preserves white swan pixels inside the circle (not reachable from edge)
def is_background(r, g, b):
    return r > 200 and g > 200 and b > 200

visited = [[False]*h for _ in range(w)]
queue = deque()

# Seed from all 4 edges
for x in range(w):
    for y in [0, h-1]:
        r, g, b, a = pixels[x, y]
        if is_background(r, g, b) and not visited[x][y]:
            visited[x][y] = True
            queue.append((x, y))
for y in range(h):
    for x in [0, w-1]:
        r, g, b, a = pixels[x, y]
        if is_background(r, g, b) and not visited[x][y]:
            visited[x][y] = True
            queue.append((x, y))

# BFS flood fill
while queue:
    x, y = queue.popleft()
    pixels[x, y] = (0, 0, 0, 0)  # transparent
    for dx, dy in [(-1,0),(1,0),(0,-1),(0,1)]:
        nx, ny = x+dx, y+dy
        if 0 <= nx < w and 0 <= ny < h and not visited[nx][ny]:
            r, g, b, a = pixels[nx, ny]
            if is_background(r, g, b):
                visited[nx][ny] = True
                queue.append((nx, ny))

print('Background removed (flood-fill). Swan white preserved.')

# ── Step 2: Find gap between circle and text ──
gap_start = None
for y in range(int(h * 0.5), h):
    count = sum(1 for x in range(w) if pixels[x, y][3] > 10)
    if count < 5:
        gap_start = y
        break

if gap_start is None:
    gap_start = int(h * 0.68)

# Find where text actually begins (after the gap)
text_start = gap_start
for y in range(gap_start, h):
    count = sum(1 for x in range(w) if pixels[x, y][3] > 10)
    if count > 20:
        text_start = y
        break

print(f'Gap at y={gap_start}, text starts at y={text_start}')

# ── Step 3: Convert red text pixels to white ──
changed = 0
for y in range(text_start, h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if a > 10 and r > 150 and g < 120 and b < 120:
            pixels[x, y] = (255, 255, 255, a)
            changed += 1

print(f'Changed {changed} text pixels to white')
img.save(dst, 'PNG')
print('Done! Saved to', dst)
