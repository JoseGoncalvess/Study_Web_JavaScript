

function UpateProfile(profileData) {
    const nameProfile = document.getElementById('profile.name')
    const phone = document.getElementById('profile.phone')
    const email = document.getElementById('profile.email')
    const location = document.getElementById('profile.location')
    const position = document.getElementById('profile.position')
    const img = document.getElementById('profile.img')
    const skills = document.getElementById('profile.skills')
    const languages = document.getElementById('profile.languagens')

    img.src = profileData.photo;
    nameProfile.innerHTML = `<span class="header__span">Olá,eu sou  </span><br>${profileData.name}`
    phone.innerText = profileData.phone
    email.innerText = profileData.email
    position.innerText = profileData.job_position
    location.innerText = profileData.location

    console.log(profileData.softSkills);


    profileData.skills.softSkills.forEach(skill => {
        const skills__item = document.createElement("li")
        skills__item.innerText = skill

        skills.appendChild(skills__item)
    });

    profileData.languages.forEach(language => {
        const language__item = document.createElement("li")
        language__item.setAttribute("class", "item__list__contente")

        language__item.innerText = language

        languages.appendChild(language__item)
    })

    // <li class="item__list__contente">Português</li>
}

(async () => {
    const profileData = await createdProfile();

    UpateProfile(profileData)
})()

