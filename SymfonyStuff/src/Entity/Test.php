<?php

namespace App\Entity;

use App\Repository\TestRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TestRepository::class)
 */
class Test
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="array")
     */
    private $Testi = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTesti(): ?array
    {
        return $this->Testi;
    }

    public function setTesti(array $Testi): self
    {
        $this->Testi = $Testi;

        return $this;
    }
}
