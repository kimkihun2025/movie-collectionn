// 영화 기본 장르 상수 선언 (const 사용 예시)
const defaultGenre = "Unknown";

// 영화 객체 배열 선언 (let 사용 예시)
let movies = [];

// 영화 객체 3개 하드코딩 (var 사용 예시)
var count = 3;

const movie1 = {
    title: "The Matrix",
    director: "Wachowskis",
    year: 1999,
    genre: "Sci-Fi",
};
const movie2 = {
    title: "Inception",
    director: "Nolan",
    year: 2010,
    genre: "Sci-Fi",
};
const movie3 = {
    title: "Parasite",
    director: "Bong",
    year: 2019,
    genre: "Drama",
};

// ...rest를 활용한 영화 추가 함수 (도전과제)
function addMovies(...newMovies) {
    movies.push(...newMovies);
}

addMovies(movie1, movie2, movie3);

// 영화 목록 출력 함수 (기본 과제)
function printMovies(movies) {
    console.log("Movie Collection:");
    for (let i = 0; i < movies.length; i++) {
        // 속성 기본값 처리
        let title = movies[i].title || "Unknown";
        let director = movies[i].director || "Unknown";
        let year = movies[i].year || "Unknown";
        let genre = movies[i].genre || defaultGenre;
        console.log(
            `${
                i + 1
            }. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genre}`
        );
    }
    console.log(`Total Movies: ${movies.length}`);
}

printMovies(movies);

// ===== 도전 과제: 영화 검색 기능 =====
function printMoviesByGenre(movies, genre) {
    let found = false;
    console.log(`${genre} Movies:`);
    for (let i = 0; i < movies.length; i++) {
        if (movies[i].genre === genre) {
            let title = movies[i].title || "Unknown";
            let director = movies[i].director || "Unknown";
            let year = movies[i].year || "Unknown";
            let genreName = movies[i].genre || defaultGenre;
            console.log(
                `${
                    i + 1
                }. Title: ${title}, Director: ${director}, Year: ${year}, Genre: ${genreName}`
            );
            found = true;
        }
    }
    if (!found) {
        console.log(`No movies found for genre: ${genre}`);
    }
}

// 예시: Sci-Fi 장르 영화 출력
printMoviesByGenre(movies, "Sci-Fi");

// ===== 도전 과제: 통계 기능 =====
// 평균 출판년도 계산
const calculateAverageYear = function (movies) {
    if (movies.length === 0) return 0;
    let sum = 0;
    let validCount = 0;
    for (let i = 0; i < movies.length; i++) {
        if (typeof movies[i].year === "number") {
            sum += movies[i].year;
            validCount++;
        }
    }
    return validCount === 0 ? 0 : (sum / validCount).toFixed(1);
};

// 가장 최신 영화 찾기
const findNewestMovie = (movies) => {
    if (movies.length === 0) return null;
    let newest = movies[0];
    for (let i = 1; i < movies.length; i++) {
        if (
            typeof movies[i].year === "number" &&
            movies[i].year > newest.year
        ) {
            newest = movies[i];
        }
    }
    return newest;
};

// 통계 출력
function printStatistics(movies) {
    const avgYear = calculateAverageYear(movies);
    const newest = findNewestMovie(movies);
    let newestInfo = newest ? `${newest.title} (${newest.year})` : "None";
    console.log("Statistics:");
    console.log(`Average Year: ${avgYear}`);
    console.log(`Newest Movie: ${newestInfo}`);
}

printStatistics(movies);