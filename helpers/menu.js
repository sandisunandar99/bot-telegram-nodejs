const listMenu = (role) => {
  let menu = []

  if (role === 'admin') {
    menu = [
      ['📬 Cek Tiket', '🙋🏻‍♀️ User Validasi'],
      ['🛠 Update Tiket']
    ]
  } else {
    menu = [
      ['📞 Lapor Tiket', '😎 Cek Validasi'],
      ['🛠 Tracking Tiket']
    ]
  }

  return menu
}

module.exports = {
  listMenu
}
