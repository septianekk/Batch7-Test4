const resumeData = {
  jurusan: "Telecommunication Engineering",
  campus: "Tel-U",
  tahun: "2015-2019",
  desc:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  workExp: [
    {
      company: "PT POS INDONESIA",
      posiiton: "Export Import",
      tahun: "2017",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      company: "PT TELEKOMUNIKASI INDONESIA",
      posiiton: "Home Service",
      tahun: "2018",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ],
};

export function resumeReduce(state = resumeData, action) {
  return state;
}
