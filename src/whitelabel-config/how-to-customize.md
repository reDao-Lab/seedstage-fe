# Hướng dẫn tuỳ chỉnh các assets, resources cho website whitelable

## 1. Tuỳ chỉnh hệ thống logo, ảnh, icon của trang

- Truy cập folder /src/whitelabel-config/images.
- Kiểm tra, thay thế các file ảnh, icon của dự án mới với tên giữ nguyên.

## 2. Tuỳ chỉnh ảnh share link
- Truy cập folder /public
- Thay thế file sharing-image.jpeg bằng hình ảnh của dự án (giữ nguyên tên).

## 3. Tuỳ chỉnh favicon của website

- Truy cập folder /src/app
- Thay thế file favicon.ico bằng hình ảnh của dự án (giữ nguyên tên).

## 4. Tuỳ chỉnh màu chủ đạo của website

- Truy cập folder /src/app
- Mở file globals.css
- Thay thế giá trị biến --primary (dòng 17) bằng giá trị màu mới, mã màu quy đổi thành hệ màu HSL.
- Thay thế giá trị biến --secondary (dòng 20) bằng giá trị màu mới, mã màu quy đổi thành hệ màu HSL.
- Thay thế giá trị biến --primary của theme màu tối (dòng 49) bằng giá trị màu mới, mã màu quy đổi thành hệ màu HSL.
- Thay thế giá trị biến --secondary của theme màu tối (dòng 52) bằng giá trị màu mới, mã màu quy đổi thành hệ màu HSL.

## 5. Tuỳ chỉnh nội dung content web

- Truy cập folder /src/whitelabel-config
- Mở file content.tsx
- Thay thế giá trị các biến, nội dung cần thay đổi.

## 6. Thay đổi endpoint kết nối dữ liệu
- Mở file next.config.mjs
- Thay đổi endpoint, config liên quan đến backend.