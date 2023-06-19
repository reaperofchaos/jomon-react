/* eslint-disable prettier/prettier */
import {DegreeType, EducationLevel, Expert} from '../types/expert.types'
export const expert: Expert = {
    "id": 1,
    "name": {
        "first": "Junko",
        "last": "Habu",
    },
    "profileImage": "habu.png",
    "description": "Junko Habu is a professor at the Department of Anthropology, University of California, Berkeley. Born in Kawasaki City in Kanagawa Prefecture, she received her BA (1982) and MA (1984) from Keio University and her Ph.D. (1996) from McGill University. Junko has excavated a number of prehistoric Jomon sites and historic Edo period sites in Japan, as well as Thule Inuit sites in the Canadian arctic. Her books include Subsistence-Settlement Systems and Intersite Variability in the Moroiso Phase of the Early Jomon Period of Japan, Ancient Jomon of Japan, Beyond Foraging and Collecting and Evaluating Multiple Narratives. Junko’s research focuses on human-environmental interaction and long-term sustainability of human cultures. (taken from <a href='https://independent.academia.edu/JunkoHabu'>Academia.Edu (accessed 2/18/2023)</a>",
    "personalWebsites": [
        {
            "id": 0,
            "name": "Academia.Edu",
            "url": "https://independent.academia.edu/JunkoHabu"
        },
        {
            "id": 1,
            "name": "Junkohabu.com",
            "url": "https://junkohabu.com"
        },
        {
            "id": 2,
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/junko-habu-0ab1462b/"
        },
        {
            "id": 3,
            "name": "University of Berkeley",
            "url": "https://ealc.berkeley.edu/people/habu-junko"
        }
    ],
    "projects": [
        {
            "id": 0,
            "name": "Berkeley Sannai Maruyama Project",
            "start": 1997,
            "end": 2008
        },
        {
            "id": 2,
            "name": "Goshizawa Matsumori Project",
            "start": 2008,
            "end": 2010
        },
        {
            "id": 3,
            "name": "Small-Scale Economies Project",
            "start": 2014,
            "end": 2016
        },
        {
            "id": 4,
            "name": "Agroecology, Sustainable Food Production and Landscape Conservation",
            "start": 2020,
        },
    ],
    "education": [
        {
            "id": 0,
            "universityId": 0,
            "university": "Keio University",
            "level": EducationLevel.BACHELORS,
            "degreeType": DegreeType.BA,
            "degree": "Archaeology",
            "yearObtained": 1982,
        },
        {
            "id": 1,
            "universityId": 0,
            "university": "Keio University",
            "level": EducationLevel.MASTERS,
            "degreeType": DegreeType.MA,
            "degree": "Archaeology",
            "yearObtained": 1984,
        },
        {
            "id": 2,
            "universityId": 1,
            "university": "McGill University",
            "level": EducationLevel.DOCTORATE,
            "degreeType": DegreeType.PHD,
            "degree": "Anthropology",
            "yearObtained": 1996,
        }
    ], 
    publications: [
    ]
}