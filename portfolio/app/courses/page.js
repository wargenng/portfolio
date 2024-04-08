"use server";

import Link from "next/link";
import { promises as fs } from "fs";

export default async function Page() {
    const file = await fs.readFile(
        process.cwd() + "/app/courses/courses.json",
        "utf8"
    );
    const data = JSON.parse(file);

    return (
        <div className="flex flex-col w-full lg:w-1/2 h-screen p-8">
            {data.classes.map((course) => (
                <Link
                    href={`/courses/${course.classId}`}
                    key={course.classId}
                    className="pb-5 "
                >
                    <h1 className="text-2xl font-semibold text-sky-600">
                        {course.classId}
                    </h1>
                    <p>{course.class}</p>
                </Link>
            ))}
        </div>
    );
}
